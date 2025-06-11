import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const AIRTABLE_API_PAT = process.env.GUEST_AIRTABLE_PAT!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME!;
const POST_API_ENDPOINT = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received form data:", body);

    const {
      name,
      phone,
      guestsNumber,
      attendanceResponse,
      allergiesResponse,
      allergiesList,
      message,
    } = body;

    if (!name || !guestsNumber || !attendanceResponse || !allergiesResponse) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await axios.post(
      POST_API_ENDPOINT,
      {
        records: [
          {
            fields: {
              Name: name,
              "Phone Number": phone,
              "Number of Guests": guestsNumber,
              Attendance: attendanceResponse,
              Allergies: allergiesResponse || "No",
              "Allergies List": allergiesList || "",
              Message: message || "",
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_PAT}`,
          "Content-Type": "application/json",
        },
      }
    );

    return NextResponse.json(
      { message: "RSVP submitted!", data: response.data },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(
      "Error submitting RSVP:",
      error instanceof Error ? error.message : error
    );
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
