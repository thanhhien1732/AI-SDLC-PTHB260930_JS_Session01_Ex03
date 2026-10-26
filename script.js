// Trả về điểm cao nhất trong mảng điểm hợp lệ, hoặc null nếu mảng rỗng
function findHighestScore(scores) {
    if (scores.length === 0) {
        return null;
    }

    let highestScore = scores[0];
    for (const score of scores) {
        if (score > highestScore) {
            highestScore = score;
        }
    }
    return highestScore;
}

// Trả về số lượng điểm lớn hơn hoặc bằng ngưỡng threshold
function countAtLeast(scores, threshold) {
    let count = 0;
    for (const score of scores) {
        if (score >= threshold) {
            count++;
        }
    }
    return count;
}

// Trả về vị trí (tính từ 0) của điểm đầu tiên thấp hơn passScore, hoặc -1 nếu không có
function findFirstBelow(scores, passScore) {
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < passScore) {
            return i;
        }
    }
    return -1;
}



// ================== TEST =========================
console.log("========== TEST 1: findHighestScore ==========");
console.log("Mảng thường:", findHighestScore([7, 8.5, 9.5, 6]));                 // Mong đợi: 9.5
console.log("Mảng rỗng:", findHighestScore([]));                                 // Mong đợi: null
console.log("Mảng 1 phần tử:", findHighestScore([8]));                           // Mong đợi: 8

console.log("\n========== TEST 2: countAtLeast ==========");
console.log("Đếm >= 8:", countAtLeast([6, 7.5, 8, 5, 9, 8.5], 8));               // Mong đợi: 3
console.log("Không có ai đạt:", countAtLeast([4, 5, 6], 7));                     // Mong đợi: 0

console.log("\n========== TEST 3: findFirstBelow ==========");
console.log("Tìm vị trí < 5 đầu tiên:", findFirstBelow([8, 7, 4.5, 9, 3], 5));   // Mong đợi: 2
console.log("Tất cả đều đạt:", findFirstBelow([6, 7, 8], 5));                    // Mong đợi: -1