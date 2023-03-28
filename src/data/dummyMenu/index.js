import React from 'react';
import { ChangePassword, EditProfile, History, SignOut } from "../../assets";

export const dummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <ChangePassword />,
    halaman: 'EditProfile'
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <EditProfile />,
    halaman: 'ChangePassword'
  },
  {
    id: 3,
    nama: 'History Pemesanan',
    gambar: <History />,
    halaman: 'History'
  },
  {
    id: 4,
    nama: 'Sign Out',
    gambar: <SignOut />,
    halaman: 'Login'
  },
];