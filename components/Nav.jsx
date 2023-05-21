'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { BsRobot } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
const Nav = () => {
    const isUserLoggedIn = true

    const [providers, setProviders] = useState(null)

    const [toggleDropDown, setToggleDropDown] = useState(false)

    useEffect(() => {
        const setProviders = async () => {
            const response = await getProviders()

            setProviders(response)
        }
        // setProviders()
    }, [])

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <BsRobot size={45} aria-label="site icon of a robot" />
                <p className="logo_text">A.I Prompts</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt" className="black_btn">
                            Create Post
                        </Link>

                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn"
                        >
                            Sign Out
                        </button>

                        <Link href="/profile">
                            <CgProfile
                                width={37}
                                height={37}
                                className="rounded-full"
                                aria-label="Profile Picture"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign in
                                </button>
                            ))}
                    </>
                )}
            </div>
            {/* Mobile Nav */}

            <div className="sm:hidden flex relative">
                {isUserLoggedIn ? (
                    <div className="flex">
                        {' '}
                        <CgProfile
                            width={37}
                            height={37}
                            className="rounded-full"
                            aria-label="Profile Picture"
                            onClick={() => setToggleDropDown((prev) => !prev)}
                        />
                        {toggleDropDown && (
                            <div className="dropdown">
                                <Link
                                    href="/profile"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href="/create-prompt"
                                    className="dropdown_link"
                                    onClick={() => setToggleDropDown(false)}
                                >
                                    Create Prompt
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropDown(false)
                                        signOut()
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type="button"
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign in
                                </button>
                            ))}
                    </>
                )}
            </div>
        </nav>
    )
}
export default Nav
