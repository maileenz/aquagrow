"use client";

import MessengerCustomerChat from "react-messenger-customer-chat";

export function Chatbox() {
  return (
    <MessengerCustomerChat
      pageId="<PAGE_ID>"
      appId="<APP_ID>"
      htmlRef="<REF_STRING>"
    />
  );
}
