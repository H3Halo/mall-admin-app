<template>
  <div class="statistics">
    <div class="card">
      <template>
        <div style="background-color: #ececec; padding: 20px">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="商品总览" :bordered="false">
                <p>商品总览</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="用户总览" :bordered="false">
                <p>用户总览</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="销售总览" :bordered="false">
                <p>销售总览</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </template>
    </div>
    <div class="echars">
      <template>
        <ve-line :data="chartData" :settings="chartSettings"></ve-line>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      area: true,
    };
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          {
            日期: '1/1', 访问用户: 1393, 下单用户: 1093, 下单率: 0.32,
          },
          {
            日期: '1/2', 访问用户: 3530, 下单用户: 3230, 下单率: 0.26,
          },
          {
            日期: '1/3', 访问用户: 2923, 下单用户: 2623, 下单率: 0.76,
          },
          {
            日期: '1/4', 访问用户: 1723, 下单用户: 1423, 下单率: 0.49,
          },
          {
            日期: '1/5', 访问用户: 3792, 下单用户: 3492, 下单率: 0.323,
          },
          {
            日期: '1/6', 访问用户: 4593, 下单用户: 4293, 下单率: 0.78,
          },
        ],
      },
    };
  },
};
</script>

<style scoped lang='less'>
</style>
