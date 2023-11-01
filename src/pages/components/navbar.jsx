import Logo from "../../components/logo"
import Button from "../../components/ui/button"

const Navbar = ({ seletedImage }) => {
    // Delete Image/Images function
    const handleDelete = () => {
        console.log("Delete button clicked")
    }
    return (
        <header className="w-full mx-auto z-50 bg-blue-50 flex items-center top-0 fixed h-16 border border-b-2">
            <div className="px-6 flex w-full items-center justify-between">
                {/* Logo */}
                <Logo />
                {/* Delete Button */}
                {seletedImage && (<Button className="text-rose-500 font-semibold px-4 py-2 cursor-pointer" onClick={handleDelete}>Delete Files</Button>
                )}
            </div>
        </header>
    )
}

export default Navbar