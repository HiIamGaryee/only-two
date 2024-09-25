import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      handleClose();
    });
  };

  return (
    <>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={handleClick}>
        Change Language
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ p: 1 }}
      >
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("zn")}>中文</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
