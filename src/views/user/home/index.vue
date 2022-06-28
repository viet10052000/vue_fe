<template>
  <div class="common-layout">
      <Header />
      <el-main>
        <el-row>
          <el-col :span="5" style="box-shadow:  0 .5rem .5rem rgba(128,128,128,0.56);">
            <div v-for="(item,index) in dataPageNew" :key="index">
              <el-row style="cursor: pointer;margin: 5px">
                <el-col :span="18">
                  <div style="font-weight: bold">{{ item.title }}</div>
                  <div style="color: #aaaaaa;font-weight: bold;">{{ item.created_at }}</div>
                </el-col>
                <el-col :span="4">
                  <img width="75" height="75" src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg" alt="">
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="11" style="box-shadow:  0 .5rem .5rem rgba(128,128,128,0.56);margin-left: 10px">
            <el-row style="height:30px;line-height:30px;text-align: center;font-weight: bold;background: rgb(170,170,170);color: white">
              <el-col :span="4" style="cursor: pointer;background: rgba(0,102,187,0.56)">VNINDEX</el-col>
              <el-col :span="4" style="cursor: pointer" @click="handleClick">FTSE 100</el-col>
              <el-col :span="4" style="cursor: pointer">Hang Seng</el-col>
              <el-col :span="4" style="cursor: pointer">Nikkei 225</el-col>
              <el-col :span="4" style="cursor: pointer">USD/VND</el-col>
              <el-col :span="4" style="cursor: pointer">USD/JPY</el-col>
            </el-row>
            <hr style="margin: 0px" />
            <ChartLine :step="20" :data1="data1" :label="label" />
          </el-col>
          <el-col :span="7" style="box-shadow:  0 .5rem .5rem rgba(128,128,128,0.56);margin-left: 20px">
            <el-col :span="24">
              <div style="padding-left: 10px;font-weight: bold;font-size: 20px;color: #65657b;cursor: pointer">Cổ phiếu tăng mạnh nhất</div>
              <el-table :data="dataCurrency" style="width: 100%">
                <el-table-column prop="name" width="170" />
                <el-table-column prop="price" width="170" />
                <el-table-column prop="change">
                  <template #default="scope">
                    <div :style="scope.row.change < 0 ? 'color: red': 'color: green'">{{ scope.row.change < 0 ? scope.row.change : '+' + scope.row.change }}%</div>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-col>
        </el-row>
        <el-row style="margin-top: 30px">
          <el-col :span="16" style="box-shadow:  0 .5rem .5rem rgba(128,128,128,0.56)">
            <div v-for="(item,index) in dataPage" :key="index">
              <el-row style="cursor: pointer;padding: 5px">
                <el-col :span="18">
                  <div style="font-weight: bold">{{ item.title }}</div>
                  <div style="font-weight: bold;color: #9d9d9d;padding-top: 5px">{{ item.content }}</div>
                  <div style="color: #aaaaaa;font-weight: bold;padding-top: 5px;text-align: end;padding-right: 25px">{{ item.created_at }}</div>
                </el-col>
                <el-col :span="4">
                  <img width="250" height="150" src="https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg" alt="">
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="7" style="box-shadow:  0 .5rem .5rem rgba(128,128,128,0.56);margin-left: 30px">
            <el-col :span="24" style="padding-top: 15px">
              <div style="padding-left: 10px;font-weight: bold;font-size: 20px;color: #65657b">Tiền điện tử</div>
              <el-table :data="dataCurrency" style="width: 100%">
                <el-table-column prop="name" width="170" />
                <el-table-column prop="price" width="170" />
                <el-table-column prop="change">
                  <template #default="scope">
                    <div :style="scope.row.change < 0 ? 'color: red': 'color: green'">{{ scope.row.change < 0 ? scope.row.change : '+' + scope.row.change }}%</div>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="24" style="padding-top: 15px">
              <div style="padding-left: 10px;font-weight: bold;font-size: 20px;color: #65657b">Trái phiếu</div>
              <el-table :data="dataCurrency" style="width: 100%">
                <el-table-column prop="name" width="170" />
                <el-table-column prop="price" width="170" />
                <el-table-column prop="change">
                  <template #default="scope">
                    <div :style="scope.row.change < 0 ? 'color: red': 'color: green'">{{ scope.row.change < 0 ? scope.row.change : '+' + scope.row.change }}%</div>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
            <el-col :span="24" style="padding-top: 15px">
              <div style="padding-left: 10px;font-weight: bold;font-size: 20px;color: #65657b">Các loại tiền</div>
              <el-table :data="dataCurrency" style="width: 100%">
                <el-table-column prop="name" width="170" />
                <el-table-column prop="price" width="170" />
                <el-table-column prop="change">
                  <template #default="scope">
                    <div :style="scope.row.change < 0 ? 'color: red': 'color: green'">{{ scope.row.change < 0 ? scope.row.change : '+' + scope.row.change }}%</div>
                  </template>
                </el-table-column>
              </el-table>
            </el-col>
          </el-col>
        </el-row>
      </el-main>
      <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/user/header/index'
import Footer from '@/components/user/footer/index'
import ChartLine from '@/components/user/chart/index'
import { ref } from 'vue'
const dataPageNew = ref([
  {
    id: 1,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 2,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 3,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 4,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 5,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    created_at: '27/06/2022 15:00'
  },
])
const dataPage = ref([
  {
    id: 1,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type ' +
        'specimen book. It has survived not only five centuries, but also the leap into ' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in ',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 2,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type ' +
        'specimen book. It has survived not only five centuries, but also the leap into ' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in ',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 3,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type ' +
        'specimen book. It has survived not only five centuries, but also the leap into ' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in ',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 4,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type ' +
        'specimen book. It has survived not only five centuries, but also the leap into ' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in ',
    created_at: '27/06/2022 15:00'
  },
  {
    id: 5,
    writer: 'viet nguyen',
    title: 'Làn sóng cấm xuất khẩu lương thực có thể gây ra hiệu ứng domino',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,' +
        ' when an unknown printer took a galley of type and scrambled it to make a type ' +
        'specimen book. It has survived not only five centuries, but also the leap into ' +
        'electronic typesetting, remaining essentially unchanged. It was popularised in ',
    created_at: '27/06/2022 15:00'
  },
])
const dataCurrency = ref([
  {
    id: 1,
    name: 'USD/EUR',
    price: '12.99',
    change: 0.00
  },
  {
    id: 2,
    name: 'USD/JPY',
    price: '12.99',
    change: -0.07
  },
  {
    id: 3,
    name: 'USD/CAD',
    price: '12.99',
    change: -0.08
  },
  {
    id: 4,
    name: 'USD/CNY',
    price: '12.99',
    change: -0.02
  },
  {
    id: 5,
    name: 'GBP/USD',
    price: '12.99',
    change: 0.07
  },
])
const label = ref('vnindex')
const data1 = ref([11,22,44,33,55,66,77,55,88,11,22,44,33,55,66,77,55,88,44,33,55,66,34])
const handleClick = () => {
  data1.value = [11,22,44,33,55,66,77,55,88,11,22,44,33,55,66,77,55,88,44,33,55,66,34]
  label.value = 'FTSE 100'
  console.log(label.value)
}
</script>

<style lang="scss" scoped>
.column-color {
  color: red;
}
</style>