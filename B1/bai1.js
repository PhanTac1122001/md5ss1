for (let i = 0; i <= 5; i++) {
    console.log("Trong vòng lặp: i =", i);
}


try {
    console.log("Ngoài vòng lặp: i =", i);
} catch (error) {
    console.log("Lỗi:", error.message);
}

