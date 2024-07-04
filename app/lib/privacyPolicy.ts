import { client } from "@/utils/client";
import { PrivacyPolicy } from "./types/interfaces";
import groq from "groq";
export async function getprivacyPolicy(){
    const query=groq`
   *[_type == "privacyPolicy"] |order(title asc){
  _id,
  title,
  description,
}
`
    const data = await client.fetch(query);
    return data as PrivacyPolicy[]
}