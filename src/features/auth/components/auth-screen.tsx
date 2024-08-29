"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");


    return (
        <div className="h-full flex items-center justify-center bg-white bg-[radial-gradient(100%_50%_at_50%_0%,#F2F7FC_0,#FDFEEC_50%,#EEECFE_100%)]">
            <div className="md:h-auto md:max-w-md">
                {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
            </div>
        </div>

    )
} 