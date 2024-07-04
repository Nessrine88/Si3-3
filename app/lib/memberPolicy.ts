import { client } from "@/utils/client";
import { MemberPolicy } from "./types/interfaces";
import groq from "groq";
export async function getMemberPolicy(){
    const query=groq`
   *[_type == "memberPolicy"]|order(title asc) {
  _id,
  title,
  description,
}
`
    const data = await client.fetch(query);
    return data as MemberPolicy[]
}