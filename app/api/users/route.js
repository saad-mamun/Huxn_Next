// This file is part of a Next.js API route that handles requests for user data based on a dynamic ID parameter.

import { NextResponse } from "next/server";
import {users} from "@/app/util/db";

export function GET() {
    const data = users;
    return NextResponse.json({data})
}