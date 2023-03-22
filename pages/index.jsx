import Image from "next/image";
import Icon from "../images/index/icon";
import blob from "../images/blob/blob.svg";
import desktopBG from "../images/index/desktop-section-1-bg.svg";
import section3_BG from "../images/index/Desktop-section-3-BG.svg";
import section3_illustration from "../images/index/Desktop-section-3-ilustration.svg";

const Mobile_Card = ({ image, title, text }) => {
    return (
        <div className='flex items-center justify-center max-w-full CONTAINER max-h-fit '>
            <Image src={image} className='h-14 w-14 mx-[-1.5rem] z-10 ' />
            <div className='w-[90%] flex flex-col rounded-2xl bg-green-500 py-4'>
                <h2 className='self-center text-2xl text-white'>{title}</h2>
                <p className='px-1 text-white pl-9 '>{text}</p>
            </div>
        </div>
    );
};

const Desktop_Card = ({ image, title, text }) => {
    return (
        <div className='flex flex-col items-center gap-5 CARD-CONTAINER w-60 '>
            <Image src={image} className='h-20 max-w-24' />
            <h2 className='text-3xl'>{title}</h2>
            <p className='text-black md:w-48 '>{text}</p>
        </div>
    );
};

export default function Home() {
    return (
        <>
            <main
                className='CONTAINER flex flex-col gap-15 items-center max-w-full my-7 gap-10 mx-3 xxs:mx-5 xs:mx-5 
				 md:mx-5
				lg:mx-auto lg:w-[796px] xl:w-[1088px] md:text-lg
			 '
            >
                <Image
                    className='BACKGROUND  w-[7rem] absolute right-0 top-0 -z-10 md:hidden'
                    src={blob}
                />

                {/* Default version  */}
                {/* <Image
          className="BACKGROUND xxxs:max-lg:hidden md:absolute md:-right-10 md:-top-20 md:-z-10 "
          src={desktopBG}
        /> */}

                {/* Adjusted Version  */}
                <Image
                    className='BACKGROUND xxxs:max-lg:hidden md:absolute md:-right-0 md:-top-20 md:-z-10 '
                    src={desktopBG}
                />

                <Image
                    className='BACKGROUND  w-[7rem] absolute right-0 top-0 -z-10 lg:hidden'
                    src={blob}
                />
                <div className='flex items-center justify-center max-w-full gap-8  SECTION-1 md:justify-start md:w-full md:py-5'>
                    <div className='items-start w-full gap-5 LEFT-BOX md:flex md:flex-col md:justify-center md:items-center lg:items-start '>
                        <h1 className='text-3xl font-bold text-center  md:text-left lg:text-left'>
                            Veien til ny jobb{" "}
                            <br className='md:hidden lg:visible' /> starter her!
                        </h1>
                        <p
                            className='xxxs:max-md:hidden md:visible w-[25rem] 
					 mb-6'
                        >
                            Bakgrunnen for opprettelsen av jobbjakt.no var
                            etterspørsel fra mange arbeidssøkere om en side som
                            på en ryddig måte kunne vise dem vei i
                            «internettjungelen».
                        </p>

                        <button className='py-2 rounded-full xxxs:max-md:hidden md:visible md:bg-jj-color-green md:px-6 md:text-white'>
                            Er du på jobbjakt?
                        </button>
                    </div>
                </div>
                <section className='items-center w-full text-white CARDS lg:pt-16 md:max-w-full '>
                    <div className='flex flex-col gap-6 MOBILE-CARDS md:hidden '>
                        <Mobile_Card
                            image={Icon.magnifying}
                            title={"Finn jobb"}
                            text={
                                "Det første steget i enhver ny jobbsøkeprosess. Hva har jeg lyst til å gjøre? Hva er jeg god til? Hvem har jeg lyst til å jobbe for? Hvor vil jeg jobbe?"
                            }
                        />

                        <div className='flex flex-row-reverse items-center justify-center max-w-full CONTAINER max-h-fit '>
                            <Image
                                src={Icon.papir}
                                className='h-14 w-14 mx-[-1.5rem] z-10 '
                            />
                            <div className='w-[90%] flex flex-col rounded-2xl bg-green-500 py-4'>
                                <h2 className='self-center text-2xl text-white'>
                                    Søk jobb
                                </h2>
                                <p className='text-white px-7'>
                                    Du har funnet en jobb du har lyst på og
                                    neste steg er å søke på stillingen. Hvor
                                    starter man? Hvordan utformer man en god CV?
                                    Hva skriver man i en søknad?
                                </p>
                            </div>
                        </div>
                        <Mobile_Card
                            image={Icon.talk}
                            title={"Intervju"}
                            text={
                                "Tiden er inne for intervjuet og pulsen øker. Hvordan forbereder du deg til intervjuet? Hva kommer du til å få spørsmål om og hvordan kan du gjøre det beste inntrykket?"
                            }
                        />
                    </div>

                    <div className='DESKTOP-CARDS hidden md:visible md:flex md:max-w-full md:justify-between md:my-4 lg:max-w-[1120px] '>
                        <Desktop_Card
                            image={Icon.desktop_magnify}
                            title={"Finn jobb"}
                            text={
                                "Det første steget i enhver ny jobbsøkeprosess. Hva har jeg lyst til å gjøre? Hva er jeg god til? Hvem har jeg lyst til å jobbe for? Hvor vil jeg jobbe?"
                            }
                        />
                        <div className='xss:max-md:hidden bg-black h-44 w-[.15rem] flex self-center opacity-40'></div>
                        <Desktop_Card
                            image={Icon.desktop_papir}
                            title={"Søk jobb"}
                            text={
                                "Du har funnet en jobb du har lyst på og neste steg er å søke på stillingen. Hvor starter man? Hvordan utformer man en god CV? Hva skriver man i en søknad?"
                            }
                        />
                        <div className='xss:max-md:hidden bg-black h-44 w-[.15rem] flex self-center opacity-40'></div>

                        <Desktop_Card
                            image={Icon.desktop_talk}
                            title={"Intervju"}
                            text={
                                "	Tiden er inne for intervjuet og pulsen øker. Hvordan forbereder du deg til intervjuet? Hva kommer du til å få spørsmål om og hvordan kan du gjøre det beste inntrykket?"
                            }
                        />
                    </div>
                </section>
                <section className='flex flex-col max-w-full gap-4 MOBILE-SECTION-2 md:hidden md:items-center '>
                    <Image className='m-auto w-60 lg:w-72' src={Icon.spacer} />
                    <h2 className='flex justify-center mx-3'>Jobbjakt.no</h2>
                    <p className='self-center max-w-full mx-3 text-center w-80 '>
                        Bakgrunnen for opprettelsen av jobbjakt.no var
                        etterspørsel fra mange arbeidssøkere om en side som på
                        en ryddig måte kunne vise dem vei i «internettjungelen».
                    </p>
                    <button className='flex self-center px-6 py-2 text-white rounded-full  bg-jj-color-green'>
                        Om oss
                    </button>
                </section>
            </main>

            <section className='DESKTOP-SECTION-2 xxxs:max-md:hidden md:visible md:w-full md:flex md:my-4 md:h-full '>
                <Image
                    src={Icon.blob_left}
                    className='absolute items-center self-end w-40 BACKGROUND -z-10 '
                />
                <div
                    className='CONTENT flex m-20 justify-between items-center  lg:w-[1120px] lg:mx-auto lg:px-20
				 '
                >
                    <div className='flex flex-col gap-7 lg:w-1/2 '>
                        <h2 className='md:text-3xl '>
                            Få <br /> gode tips <br /> til CV her!
                        </h2>
                        <p className='max-w-lg SECTION-2-TEXT xxs:max-md:hidden'>
                            Tiden er inne for intervjuet og pulsen øker. Hvordan
                            forbereder du deg til intervjuet? Hva kommer du til
                            å få spørsmål om og hvordan kan du gjøre det beste
                            inntrykket?
                        </p>
                        <button className='px-6 py-2 rounded-full xxs:max-sm:hidden md:visible md:w-fit md:py-2 md:px-5 md:bg-jj-color-green md:text-white '>
                            Les mer
                        </button>
                    </div>

                    <Image
                        src={Icon.desktop_section_2_illustration}
                        className='w-[20rem]'
                    />
                </div>
                <Image
                    src={Icon.blob_right}
                    className='absolute right-0 w-40 BACKGROUND -z-10 '
                />
            </section>
            <section className='SECTION-3 xxxs:max-md:hidden: md:visible '>
                <Image
                    src={section3_BG}
                    className='absolute BACKGROUND -z-10'
                />

                <div
                    className='DESKTOP-CONTENT xxxs:max-md:hidden md:visible md:flex md:max-2xl:mx-10 md:my-7
				lg:justify-between lg:mx-auto lg:items-center lg:max-w-[1120px] lg:px-20 '
                >
                    <div className=' TEXT md:flex md:flex-col md:h-full md:justify-center md:gap-7'>
                        <h2 className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-jj-gradient-dark to-jj-gradient-green'>
                            Jobbjakt.no
                        </h2>
                        <p>
                            Bakgrunnen for opprettelsen av jobbjakt.no var
                            etterspørsel fra mange arbeidssøkere om en side som
                            på en ryddig måte kunne vise dem vei i
                            «internettjungelen». Dette var henvendelser fra folk
                            som ønsket å skifte jobb, nyutdannede og folk som
                            for tiden var arbeidsledig. Det er også kjent at
                            langt under 50% av stilingene som besettes per i dag
                            er utlyst på vanlig måte i dagspressen. Dette gjør
                            at en veiviser til proaktiv bruk av internett er
                            nødvendig å ha.
                        </p>
                        <button className='py-2 rounded-full  md:visible md:bg-jj-color-green md:px-6 md:text-white w-fit'>
                            Er du på jobbjakt?
                        </button>
                    </div>

                    <Image
                        src={section3_illustration}
                        className='md:visible md:m-0 md:w-[25rem]'
                    />
                </div>
            </section>

            <section className='flex flex-col max-w-full gap-4 px-3 text-white INPUT-FIELDS bg-gradient-to-tr from-jj-gradient-dark to-jj-gradient-green py-7 md:max-2xl:px-10 md:py-7 '>
                <div className='CONTENT  mx-3 xxs:mx-10  lg:flex max-w-[1120px] justify-between gap-10 md:max-lg:w-[40rem] md:flex lg:mx-auto'>
                    <div className='flex flex-col gap-5 TEXT basis-1/2 '>
                        <h2 className='font-bold text-white sm:max-w-xl lg:text-2xl'>
                            Ønsker du annonseplass hos jobbjakt.no?
                        </h2>
                        <p className=''>
                            Vi har valgt å gå ut med lave priser for våre
                            annonsører. Grunnen til dette er at vi forsøker å
                            holde administrasjonsarbeidet på et minimum ved kun
                            å tilby rimelige 12 måneders kontrakter. Juli 05 var
                            første effektive driftsmåned og antall hits var
                            allerede da oppe i 16 000 til tross for at det var
                            sommerferie. Besøket har holdt seg jevnt i de
                            påfølgende årene.
                        </p>
                    </div>
                    <form className='flex flex-col max-w-full gap-3 basis-1/2 '>
                        <label className='flex flex-col justify-between w-full border-none lg:max-w-2xl'>
                            Navn
                            <input type='text' />
                        </label>
                        <label className='flex flex-col justify-between w-full border-none lg:max-w-2xl'>
                            Epost
                            <input type='text' />
                        </label>
                        <label className='flex flex-col justify-between w-full border-none lg:max-w-2xl'>
                            Melding
                            <textarea
                                id='text-box'
                                name='text'
                                rows='2'
                                cols='5'
                            />
                        </label>
                        <button className='px-8 py-2 bg-jj-color-green w-fit rounded-xl'>
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
