import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";
import OrderModal from "./OrderModal";

function Menu() {
  const menu = useSelector((state) => state.menuState)
  const modalMenu = useSelector((state) => state.orderModalState.modalMenu)

  const dispatch = useDispatch()
  const setModalMenu = (modalMenu) => {
    dispatch({ type: "orderModal/setModalMenu", modalMenu: modalMenu })
  }

  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        {" "}
        메뉴 정보가 없어요!
      </div>
    );

  const categorys = Object.keys(menu);
  return (
    <>
      {categorys.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className="menu">
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalMenu ? (
        <OrderModal />
      ) : null}
    </>
  );
}

export default Menu;
