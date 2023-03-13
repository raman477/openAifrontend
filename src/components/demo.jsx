import { useEffect } from "react"
import { getUnidaysTempToken } from "../services/apiService"

export const TestDemo = () => {

    // useEffect(() => {
    //     // getUnidaysTempToken()
    //     fetch('https://account.myunidays.com/oauth/authorize?client_id=APAADN6XJGFLIWRVIBVORCEGCD3MNBN1LFEOGJMXMU4&redirect_uri=http://localhost:8080/auth/unidays&response_type=code&state=tempToken&code_challenge_method=S256&code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM&scope="openid member"', {
    //         method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //         mode: 'no-cors',
    //     }).then(res => {
    //         console.log(res)
    //     })
    // })
    return (<>

        <div>Hello demo</div>
    </>
    )
}