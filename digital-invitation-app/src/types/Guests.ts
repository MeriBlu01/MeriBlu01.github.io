export type GuestFields = {
  "ID Slug"?: string;
  Name?: string;
  "Max Guests Number"?: number;
  Contact?: string;
  Email?: string;
  "Groom or Bride"?: string;
  State?: string;
};

export type AirtableRecord = {
  id: string;
  fields: GuestFields;
};
