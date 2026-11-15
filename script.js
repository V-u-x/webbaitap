document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn form tự động tải lại trang

    // Lấy giá trị người dùng nhập vào ô input
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    // Thiết lập tài khoản Giáo viên
    if (user === 'giaovien' && pass === '123456') {
        alert('Đăng nhập thành công với quyền Giáo viên!');
        window.location.href = 'giaovien.html'; // Chuyển hướng sang trang quản lý của giáo viên
    } 
    // Thiết lập tài khoản Học sinh
    else if (user === 'hocsinh' && pass === '123456') {
        alert('Đăng nhập thành công với quyền Học sinh!');
        window.location.href = 'danhsachde.html'; // Chuyển hướng sang trang làm bài thi của học sinh
    } 
    // Xử lý khi nhập sai
    else {
        alert('Tên đăng nhập hoặc mật khẩu không đúng!');
    }
});