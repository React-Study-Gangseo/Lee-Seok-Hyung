# 오픈마켓 서비스

## 프로젝트 개요

이 프로젝트는 상품에 대한 CRUD(Create, Read, Update, Delete)가 가능하고 SPA으로 만들었습니다.<br>

배포 URL : https://hodu-market-dev.netlify.app/

테스트용 계정 <br>

```
구매자
ID : buyer1
PW : hodu0910

판매자
ID : seller1
PW : hodu0910
```

## ⚙️ 개발환경 및 기술 스택

- React
- React Query
- TypeScript
- styled-components
- Recoil

## 📂 폴더구조

```
hodu-market
├─ .eslintrc.json
├─ .github
│  └─ ISSUE_TEMPLATE
│     ├─ ♻️refactor.md
│     ├─ ✨feature.md
│     ├─ 🐛bug.md
│     └─ 💄style.md
├─ .gitignore
├─ .prettierrc
├─ package-lock.json
├─ package.json
├─ public
│  ├─ assets
│  │  ├─ check-box.svg
│  │  ├─ check-fill-box.svg
│  │  ├─ icon-404.svg
│  │  ├─ icon-check-off.svg
│  │  ├─ icon-check-on.svg
│  │  ├─ icon-check.svg
│  │  ├─ icon-delete.svg
│  │  ├─ icon-down-arrow.svg
│  │  ├─ icon-fb.svg
│  │  ├─ icon-img.png
│  │  ├─ icon-insta.svg
│  │  ├─ icon-minus-line.svg
│  │  ├─ icon-plus-line.svg
│  │  ├─ icon-plus.svg
│  │  ├─ icon-rhigt-arrow.svg
│  │  ├─ icon-search.svg
│  │  ├─ icon-shopping-bag.png
│  │  ├─ icon-shopping-bag.svg
│  │  ├─ icon-shopping-cart-2.svg
│  │  ├─ icon-shopping-cart.svg
│  │  ├─ icon-swiper-1.png
│  │  ├─ icon-swiper-1.svg
│  │  ├─ icon-swiper-2.png
│  │  ├─ icon-swiper-2.svg
│  │  ├─ icon-up-arrow.svg
│  │  ├─ icon-user-2.svg
│  │  ├─ icon-user.svg
│  │  ├─ icon-yt.svg
│  │  └─ Logo-hodu.png
│  ├─ index.html
│  └─ _redirects
├─ README.md
├─ src
│  ├─ api
│  │  ├─ apiURL.ts
│  │  ├─ cart
│  │  │  ├─ deleteCartItemAPI.ts
│  │  │  ├─ getCartItemAPI.ts
│  │  │  ├─ postCartItemAPI.ts
│  │  │  └─ putCartItemAPI.ts
│  │  ├─ login
│  │  │  ├─ loginAPI.ts
│  │  │  └─ logoutAPI.ts
│  │  ├─ product
│  │  │  ├─ deleteSellerProductAPI.ts
│  │  │  ├─ getAllProductsAPI.ts
│  │  │  ├─ getDetailProductAPI.ts
│  │  │  ├─ getSearchProductsAPI.ts
│  │  │  ├─ getSellerProductsAPI.ts
│  │  │  ├─ postSellerProductAPI.ts
│  │  │  └─ putSellerProductAPI.ts
│  │  └─ user
│  │     ├─ buyerSignUpAPI.ts
│  │     └─ sellerSignUpAPI.ts
│  ├─ App.tsx
│  ├─ atoms
│  │  └─ Atoms.js
│  ├─ components
│  │  ├─ cartList
│  │  │  └─ CartList.tsx
│  │  ├─ common
│  │  │  ├─ carousel
│  │  │  │  ├─ Carousel.tsx
│  │  │  │  └─ ImgList.ts
│  │  │  ├─ footer
│  │  │  │  └─ Footer.tsx
│  │  │  ├─ inputBox
│  │  │  │  └─ InputBox.tsx
│  │  │  ├─ memberType
│  │  │  │  └─ MemberType.tsx
│  │  │  ├─ nav
│  │  │  │  ├─ Nav.tsx
│  │  │  │  └─ SellerNav.tsx
│  │  │  ├─ pagination
│  │  │  │  └─ Pagiation.tsx
│  │  │  ├─ products
│  │  │  │  └─ Products.tsx
│  │  │  └─ textEditor
│  │  │     └─ TextEditor.tsx
│  │  ├─ modal
│  │  │  └─ MyPageModal.tsx
│  │  ├─ signUp
│  │  │  ├─ BuyerSignUpForm.tsx
│  │  │  └─ SellerSignUpForm.tsx
│  │  └─ tabContent
│  │     └─ TabContent.tsx
│  ├─ hooks
│  │  ├─ hooks.txt
│  │  └─ UseGetProducts.tsx
│  ├─ index.tsx
│  ├─ model
│  │  └─ market.ts
│  ├─ pages
│  │  ├─ Cart.tsx
│  │  ├─ Home.tsx
│  │  ├─ Login.tsx
│  │  ├─ Page404.tsx
│  │  ├─ Payment.tsx
│  │  ├─ ProductDetail.tsx
│  │  ├─ SellerCenter.tsx
│  │  ├─ SignUp.tsx
│  │  └─ UploadProduct.tsx
│  ├─ styles
│  │  └─ Globalstyled.jsx
│  └─ types
│     └─ custom.d.ts
├─ tsconfig.json
└─ yarn.lock

```

## 구현 리스트

- 구매자/판매자로 서비스를 이용하실 수 있습니다.
- 로그인 하지 않아도 일부 서비스는 이용가능하며 주문 및 마이페이지는 로그인 후 사용 가능합니다.
- 구매자는 장바구니, 상품 주문및 주문 확인이 가능합니다.
- 판매자는 판매자 센터를 통해 상품 등록, 수정및 삭제가 가능합니다.

## 트러블 슈팅

<details>
  <summary>장바구니 수량 조절 버튼 오류</summary>
서버상에서 수량변경이 일어났지만, 실제로는 화면에 변화가 없는 에러가 있습니다.

<br>

```ts
//기존 코드
const [cartItemList, setCartItemList] = useState<CartListProduct[]>([]);
const [cartItemDeatails, setCartItemDetails] = useState<ProductResults[]>([]);
const [amounts, setAmounts] = useState<{ [key: string]: number }>({});
const queryInfo = useQuery('cartItems', () => getCartItemAPI(token));

useEffect(() => {
  const { data, error, isLoading, isError } = queryInfo;
  if (data) {
    setCartItemList((prevState) =>
      JSON.stringify(prevState) !== JSON.stringify(data.results)
        ? data.results
        : prevState,
    );

    if (data.results.length > 0) {
      const newAmounts = data.results.reduce(
        (acc: { [key: string]: number }, curr: CartListProduct) => ({
          ...acc,
          [curr.product_id]: curr.quantity,
        }),
        {},
      );
      setAmounts((prevState) =>
        JSON.stringify(prevState) !== JSON.stringify(newAmounts) ? newAmounts : prevState,
      );
    }
  }
}, [queryInfo]);

const handleIncrement = (productId: any) => {
  const newQuantity = (amounts[productId] || 0) + 1;
  const cartItem = cartItemList.find((item) => item.product_id === productId);
  if (!cartItem) return;

  const formData = {
    product_id: productId,
    quantity: newQuantity,
    is_active: true,
  };
  putCartItemAPI(token, cartItem?.cart_item_id, formData).then(() => {
    setAmounts((prev) => ({ ...prev, [productId]: newQuantity }));
  });
};
```

### 왜 수량변경에 대한 화면 업데이트가 지연되었을까요?

handleIncrement 함수에서 putCartItemAPI를 통해 API 요청을 보낸 후에 setAmounts를 호출하여 상태를 업데이트합니다. 이 때, setAmounts 함수는 **비동기적으로 동작하므로**, 상태 업데이트를 요청한 직후에는 상태 변경이 바로 이루어지지 않습니다. 따라서 **상태 업데이트 함수(setAmounts)를 호출한 직후에 바로 상태(amounts)를 조회하면 업데이트가 반영되지 않은 상태를 조회**하게 됩니다. 때문에 상태 변경에 따른 화면 업데이트가 지연된 것입니다.

이를 해결하기 위해서는 상태 업데이트 이후에 렌더링을 유발하는 로직을 사용해야 합니다. 예를 들어, **useEffect 훅과 의존성배열을 활용**하면 상태 업데이트와 그에 따른 렌더링 사이의 동기화를 보장할 수 있습니다.

```ts
// 문제 해결
const [cartItemList, setCartItemList] = useState<CartListProduct[]>([]);

useEffect(() => {
  if (cartItemList.length > 0) {
    const fetchDetails = async () => {
      const detailsArr = await Promise.all(
        cartItemList.map((item) => getDetailProductAPI(item.product_id)),
      );
      setCartItemDetails(detailsArr);
    };
    fetchDetails();
  }
}, [cartItemList]); // cartItemList, 즉 amount값(quantity)이 변했을때, 재랜더링 시켜준다.
```

</details>

<details>
  <summary>장바구니 수량 조절 버튼 오류2</summary>
  장바구니의 수량을 변경하고 주문 페이지에 들어갔을때, 즉각적인 변화가 생기지않았습니다.
  
```js
    //기존 코드
    const handleIncrement = (productId: any) => {
	    const newQuantity = (amounts[productId] || 0) + 1;
	    const cartItem = cartItemList.find((item) => item.product_id === productId);
	    if (!cartItem) return;

        const formData = {
          product_id: productId,
          quantity: newQuantity,
          is_active: true,
        };
        putCartItemAPI(token, cartItem?.cart_item_id, formData)
          .then(() => {
            setAmounts((prev) => ({ ...prev, [productId]: newQuantity }));
          })
      };

      <button
        className="final-order-btn"
        onClick={() => {
          navigate('/payment', {
            state: { cartData: cartItemDetails, quantityData: cartItemList },
          });
        }}
      >
        주문하기
      </button>

````

```js
    // 문제해결 코드
    const handleIncrement = (productId: any) => {
      //... 생략
      putCartItemAPI(token, cartItem?.cart_item_id, formData)
      .then(() => {
          setAmounts((prev) => ({ ...prev, [productId]: newQuantity }));
          // 추가
          const newCartItemList = [...cartItemList];
          cartItem.quantity = newQuantity;
          setCartItemList(newCartItemList);
          //
      })
    };
````

주문서 페이지로 이동할때, navigate의 두번쨰 인자로 cartItemList 데이터를 전달 해줍니다.<br>
수량조절 api함수가 성공했을때, 바뀐수량을 cartItemList에 반영해줘서 문제를 해결했습니다.

</details>

## 리팩토링 리스트

- 검색어 디바운싱
- 반응형 적용
- 이미지 압축 및 예외처리
- 웹 접근성 높이기
