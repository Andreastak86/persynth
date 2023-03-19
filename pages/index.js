import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Hero from "../images/hero.jpg";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";

export default function Home() {
    return (
        <>
            <Head>
                <title>Per Synth</title>
                <meta name='description' content='Music on my mind' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className=' my-6 text-white text-4xl flex flex-col justify-center items-center'>
                    <p>Follow for more</p>
                    <br />
                    <p>Site is under construction</p>
                </div>
                <Image src={Hero} />
                <p className=' mt-10 text-white  flex flex-col justify-center items-center text-4xl'>
                    To be continued.....
                </p>
            </main>
            <footer class='bg-neutral-200 mt-20 text-center dark:bg-neutral-700 lg:text-left'>
                <div class='p-4 text-center text-neutral-700 dark:text-neutral-200'>
                    © 2023 Copyright: &nbsp;
                    <a
                        class='text-neutral-800 dark:text-neutral-400'
                        href='https://andreastak.no'
                    >
                        Andreas Takvam
                    </a>
                    <div className=' flex flex-row justify-center items-center text-4xl gap-4 mt-4'>
                        <a
                            href='https://github.com/Andreastak86'
                            target={"_blank"}
                        >
                            <VscGithub />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/andreas-takvam-623068a4/'
                            target={"_blank"}
                        >
                            <SiLinkedin />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
