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

// Trả về số tuần cần thiết để học hết tổng số bài, hoặc null nếu dữ liệu đầu vào không hợp lệ
function weeksToFinish(totalLessons, lessonsPerWeek) {
    const isValidTotal = typeof totalLessons === "number" && totalLessons >= 0;
    const isValidPerWeek = typeof lessonsPerWeek === "number" && lessonsPerWeek > 0;
    if (!isValidTotal || !isValidPerWeek) {
        return null;
    }

    let remainingLessons = totalLessons;
    let weeks = 0;
    while (remainingLessons > 0) {
        remainingLessons -= lessonsPerWeek;
        weeks++;
    }
    return weeks;
}

// Trả về chuỗi thanh tiến độ 10 ô theo phần trăm, hoặc chuỗi rỗng nếu phần trăm không hợp lệ
function buildProgressBar(percent) {
    const isValidPercent = typeof percent === "number" && percent >= 0 && percent <= 100;
    if (!isValidPercent) {
        return "";
    }

    let barContent = "";
    for (let step = 10; step <= 100; step += 10) {
        if (percent >= step) {
            barContent += "#";
        } else {
            barContent += "-";
        }
    }
    return "[" + barContent + "] " + percent + "%";
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

console.log("\n========== TEST 6: weeksToFinish ==========");
console.log("Chia hết (15 bài, 3 bài/tuần):", weeksToFinish(15, 3));    // Mong đợi: 5
console.log("Chia dư (14 bài, 3 bài/tuần):", weeksToFinish(14, 3));     // Mong đợi: 5
console.log("0 bài học:", weeksToFinish(0, 5));                         // Mong đợi: 0
console.log("Tham số lỗi (0 bài/tuần):", weeksToFinish(10, 0));         // Mong đợi: null
console.log("Tham số lỗi (âm):", weeksToFinish(-5, 2));                 // Mong đợi: null

console.log("\n========== TEST 7: buildProgressBar ==========");
console.log("50% :", buildProgressBar(50));                         // Mong đợi: "[#####-----] 50%"
console.log("0%  :", buildProgressBar(0));                          // Mong đợi: "[----------] 0%"
console.log("100%:", buildProgressBar(100));                        // Mong đợi: "[##########] 100%"
console.log("55% :", buildProgressBar(55));                         // Mong đợi: "[#####-----] 55%"
console.log("Lỗi (> 100):", buildProgressBar(105));                 // Mong đợi: ""
console.log("Lỗi (< 0)  :", buildProgressBar(-10));                 // Mong đợi: ""