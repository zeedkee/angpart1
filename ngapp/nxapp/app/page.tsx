"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./header";
import { useState } from "react";
import Child from "./child/page";

import { useRouter } from "next/navigation";

export default function Home() {
// Use the 'useRouter module'
const router = useRouter();
const [states, setStates] = useState(['Tozeur', 'Gafsa', 'Tunis'])
async function gotoLogin() {
router.push('/login')
}
async function gotoContact() {
router.push("/contact/123");
}
return (
<>
<Header />
<div>
// you can add tailwind css effect to the buttons!
<button onClick={gotoLogin}>Login Page</button>
<button onClick={gotoContact}>Contact Page</button>
<button onClick={gotoLogin} className="bg-blue-500 hover:bg-blue-700 text-
white font-bold py-2 px-4 rounded">Login Page</button>

<button onClick={gotoContact} className="bg-green-500 hover:bg-green-700

text-white font-bold py-2 px-4 rounded ml-2">Contact Page</button>
</div>
<Child states = {states} />
</>
);
}

