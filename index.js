onload = () => {
    document.querySelector('.form-check-input').checked = true
    document.forms[0].setAttribute("autocomplete","off")
    tr = document.querySelector('#result_table')

    if (tr != null) {
        tr = document.querySelector('#result_table').querySelectorAll('tr')
        for (i = 1 ; i < tr.length; i++) {
            dom = tr[i].querySelector('.link')
            document.write(dom.getAttribute("href").substring(2) + '<br/>')
        }
    }
}