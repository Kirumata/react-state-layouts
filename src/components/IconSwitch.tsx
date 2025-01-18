import './IconSwitch.css'
function IconSwitch(props: { icon: string, onSwitch: any }) {

    return (
        <>
            <div className='grid place-items-end m-8'>
                <span className="material-icons" onClick={() => props.onSwitch()} >
                    {props.icon}
                </span>
            </div>
        </>
    )
}

export default IconSwitch