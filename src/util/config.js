/**
 * Create by pirlo
 * Date: 2022/10/26 4:43 PM
 * Update: 2022/10/26 4:43 PM
 */

// 动物数组
const animals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

export const defaultGameConfig = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 18,
    // 每层块数（大致）
    levelBlockNum: 28,
    // 边界收缩步长
    borderStep: 3,
    // 总层数（最小为 2）
    levelNum: 15,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 动物数组
    animals,
};
