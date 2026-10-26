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

// Trả về điểm trung bình của các điểm hợp lệ từ 0 đến 10, hoặc null nếu không có điểm hợp lệ
function averageValidScores(scores) {
    let totalScore = 0;
    let validCount = 0;

    for (const score of scores) {
        const isValid = typeof score === "number" && score >= 0 && score <= 10;
        if (!isValid) {
            continue;
        }
        totalScore += score;
        validCount++;
    }

    if (validCount === 0) {
        return null;
    }
    return totalScore / validCount;
}

// Trả về tổng số bài học đã hoàn thành (giá trị true) ở tất cả các khóa học
function countCompletedLessons(courses) {
    let completedCount = 0;
    for (const course of courses) {
        for (const isCompleted of course) {
            if (isCompleted === true) {
                completedCount++;
            }
        }
    }
    return completedCount;
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

console.log("\n========== TEST 4: averageValidScores ==========");
console.log("Lọc dữ liệu rác:", averageValidScores([8, "chín", 12, -2, null, 10]));   // Mong đợi: 9
console.log("Toàn dữ liệu lỗi:", averageValidScores(["abc", -5, 15, undefined]));     // Mong đợi: null
console.log("Mảng rỗng:", averageValidScores([]));                                    // Mong đợi: null

console.log("\n========== TEST 5: countCompletedLessons ==========");
const testCourses = [
    [true, false, true],  // 2 bài xong
    [true, true],         // 2 bài xong
    [false, false]        // 0 bài xong
];
console.log("Tổng bài hoàn thành:", countCompletedLessons(testCourses));  // Mong đợi: 4
console.log("Mảng rỗng:", countCompletedLessons([]));                     // Mong đợi: 0