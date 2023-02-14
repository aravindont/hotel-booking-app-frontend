import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { api } from "../../api";
import axios from "axios";
import { NavbarComponent } from "../../components/navbar";
import { HeaderComponent } from "../../components/header";
export const HotelListPage = () => {
  return (
    <div>
      <NavbarComponent />
      <HeaderComponent type="list" />
    </div>
  );
};
