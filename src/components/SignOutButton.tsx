"use client"
import { signOut } from 'next-auth/react'
import { FC, useState } from 'react'
import Button from './ui/Button'
import { toast } from './ui/Toast'

interface SignOutButtonProps {

}

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const signUserOut = async () => {
        setIsLoading(true)
        try {
            await signOut()
        } catch (err) {
            toast ({
                title: "Error sign out",
                message: "Please, try this eater",
                type: "error"
            })
        }
    }
    return <Button onClick={signUserOut} isLoading={isLoading}>
        Sign Out
    </Button>
}

export default SignOutButton