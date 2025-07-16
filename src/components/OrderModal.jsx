import { useDispatch, useSelector } from 'react-redux'
import data from '../assets/data'

function OrderModal() {
    const { modalMenu, options, quantity } = useSelector(state => state.orderModalState)

    const dispatch = useDispatch()
    const resetOrderModal = () => dispatch({ type: "orderModal/resetOrderModal" })
    const setQuantity = (quantity) => dispatch({ type: "orderModal/setQuantity", quantity })

    const addToCart = (cartItem) => dispatch({ type: "cart/addToCart", cartItem })
    
    const itemOptions = data.options

    return (
        <>
            {modalMenu ? (
                <section className="modal-backdrop" onClick={resetOrderModal}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-item'>
                            <img src={modalMenu.img} />
                            <div>
                                <h3>{modalMenu.name}</h3>
                                <div>{modalMenu.description}</div>
                            </div>
                        </div>
                        <ul className="options">
                            {Object.keys(itemOptions).map(el => <Option
                                key={el}
                                name={el}
                                itemOptions={itemOptions[el]}
                            />)}
                        </ul>
                        <div className="submit">
                            <div>
                                <label htmlFor="count" >개수</label>
                                <input id="count" type="number" value={quantity} min='1' onChange={(event) => setQuantity(Number(event.target.value))} />
                            </div>
                            <button onClick={() => {
                                addToCart({ options, quantity, id: modalMenu.id })
                                resetOrderModal()
                            }}>장바구니 넣기</button>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    )
}

function Option({ name, itemOptions }) {
    const { options } = useSelector(state => state.orderModalState)

    const dispatch = useDispatch()
    const setOptions = (options) => dispatch({ type: "orderModal/setOptions", options })

    return (
        <li className='option'>
            {name}
            <ul>
                {itemOptions.map((option, idx) => (
                    <li key={option}>
                        <input type='radio' name={name} checked={options[name] === idx} onChange={() => setOptions({ ...options, [name]: idx })} />
                        {option}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default OrderModal