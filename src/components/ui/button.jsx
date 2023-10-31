const Button = ({
    children,
    onClick,
    className
}) => {
    return (
        // Button component will take children, click action and classname as props
        <button className={`${className}`} onClick={onClick}>{children}</button >
    )
}

export default Button