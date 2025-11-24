
'use client';

import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "lt" : "en")}
      className="text-sm font-medium"
    >
      {language === "en" ? "LT" : "EN"}
    </Button>
  );
};

export default LanguageSwitch;
