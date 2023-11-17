import React, { useEffect } from "react";

import { api } from "@/lib/api";
import { Partner } from "@/lib/types/partner";

export function usePartner() {
  const [partner, setPartner] = React.useState<Partner | null>();

  const getPartner = async () => {
    const { data } = await api.get("partner");
    setPartner(data);
  };

  // Get all partner information
  useEffect(() => {
    getPartner();
  }, []);

  return {
    partner,
  };
}
