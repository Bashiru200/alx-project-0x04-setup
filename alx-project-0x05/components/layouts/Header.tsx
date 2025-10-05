import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { useCount } from "@/context/CountContext";

const Header: React.FC = () => {
    const pathname = usePathname();
    const { count} = useCount();

    return (
        <header className="fixed w-full bg-white shadow-md">
            <div className="contianer mx-auto flex justify-between items-center
            py-6 px-4 md:px=8">
                <Link href="/" className="text-3xl md:text-4xl font-bold
                text-gray-800 tracking-tight">
                    Splash 
                </Link>

                {/* Button Group */}
                <div className="flex gap-4">
                    {
                        !["/counter-app"].includes(pathname) ? (
                            <>
                                <Button 
                                buttonLabel="Sign In"
                                buttonBackground="red"
                                />
                                <Button
                                buttonLable="Sign Up"
                                buttonBackground="blue"
                                />
                            </>
                        ) : (
                            <p className="font-semibold text-lg">Current Count: {count}</p>
                        )
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;