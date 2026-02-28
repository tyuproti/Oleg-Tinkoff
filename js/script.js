let tg = window.Telegram.WebApp

let send_reg = document.querySelector('[name="send_reg"]')

send_reg.addEventListener('click', ()=> {
    let user_name = document.querySelector('[name="user_name"]').value,
        user_email = document.querySelector('[name="user_email"]').value,
        user_tel = document.querySelector('[name="user_tel"]').value;

    let user_data = {
        data_type: 'user_sub'
        'user_name': user_name,
        'user_email': user_email,
        'user_tel': user_tel,
    }

    tg.sendData(JSON.stringify(user_data));
    tg.close();
})
