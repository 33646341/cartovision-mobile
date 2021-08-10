$(function () {
    $("#menu").click(function () {
        $(".cbl").css("left", 0)
    })
    $(".cbl").click(function () {
        $(".cbl").css("left", "-750px")
    })
    $('.home').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.about').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.Work').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.Structure').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });
    $('.Sign').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

    const { Query, User } = AV;
    AV.init({
        appId: "Xn3dXg0C51MRfHCJpb7I28Bl-MdYXbMMI",
        appKey: "mOEtYyTNkrWeJCNLOPRgOE5j",
        // serverURL: "https://please-replace-with-your-customized.domain.com"
    });
})

function signUp(formNameSelector) {
    if (validateForm(formNameSelector)) {
        const NewStuObject = AV.Object.extend('stu');
        const newStuObject = new NewStuObject();
        // 取得前端表单的所有输入变量
        $(formNameSelector).serializeArray().forEach(element => {
            newStuObject.set(element.name, element.value);
        });
        newStuObject.save().then((newStuObject) => {
            console.log('保存成功。')
            alert("报名成功!");
            $(formNameSelector).resetForm();
        }).catch((error) => {
            // catch 方法写在 Promise 链式的最后，可以捕捉到全部 error
            console.error(error);
            alert("报名出错!");
        });
    }
}