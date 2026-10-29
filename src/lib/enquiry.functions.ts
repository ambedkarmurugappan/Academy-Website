import { createServerFn } from "@tanstack/react-start";
import { enquirySchema } from "./enquiry";

export type EnquiryResult =
  | { ok: true }
  | { ok: false; reason: "not_configured" | "failed"; message: string };

// Forwards a validated enquiry to the Google Apps Script web app set in ENQUIRY_SHEET_ENDPOINT.
// Success is only reported when the script replies with {"result":"success"}.
export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }): Promise<EnquiryResult> => {
    const endpoint = process.env["ENQUIRY_SHEET_ENDPOINT"];
    if (!endpoint) {
      return {
        ok: false,
        reason: "not_configured",
        message:
          "Online enquiries are not connected yet. Please call or WhatsApp us on 7358866644.",
      };
    }
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          fullName: data.fullName,
          mobile: data.mobile,
          email: data.email,
        }),
        redirect: "follow",
      });
      const text = await res.text();
      let ok = false;
      try {
        ok = res.ok && JSON.parse(text)?.result === "success";
      } catch {
        ok = false;
      }
      if (!ok) {
        console.error(`Enquiry endpoint failed [${res.status}]: ${text.slice(0, 300)}`);
        return { ok: false, reason: "failed", message: "We couldn't save your enquiry. Please try again or call 7358866644." };
      }
      return { ok: true };
    } catch (e) {
      console.error("Enquiry endpoint error", e);
      return { ok: false, reason: "failed", message: "Network problem while sending. Please try again or call 7358866644." };
    }
  });
