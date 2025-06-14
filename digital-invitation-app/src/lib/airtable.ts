import axios from "axios";
import { AirtableRecord } from "@/types/Guests";

const AIRTABLE_API_PAT = process.env.GUEST_AIRTABLE_PAT!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_NAME = process.env.GUESTS_AIRTABLE_TABLE_NAME!;

const airtableApi = axios.create({
  baseURL: `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}`,
  headers: {
    Authorization: `Bearer ${AIRTABLE_API_PAT}`,
  },
});

export async function getGuestBySlug(slug: string) {
  try {
    const filterFormula = `FIND("${slug}", {ID Slug})`;

    const response = await airtableApi.get(`/${AIRTABLE_TABLE_NAME}`, {
      params: {
        filterByFormula: filterFormula,
        maxRecords: 1,
      },
    });

    const record: AirtableRecord | undefined = response.data.records[0];
    if (!record) return null;

    return {
      id: record.id,
      idSlug: record.fields?.["ID Slug"] ?? "",
      name: record.fields?.Name ?? "Invitado",
      maxGuests: record.fields?.["Max Guests Number"] ?? 1,
      contact: record.fields?.Contact ?? "",
      email: record.fields?.Email ?? "",
      side: record.fields?.["Groom or Bride"] ?? "",
      state: record.fields?.State ?? "",
    };
  } catch (error: any) {
    console.error(
      "Error fetching guest by slug:",
      error?.response?.data || error.message
    );
    return null;
  }
}
