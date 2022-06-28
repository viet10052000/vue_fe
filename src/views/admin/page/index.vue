<template>
  <div class="common-layout" style="margin: 0;padding: 0">
    <Header />
    <el-container class="admin">
      <div>
        <Nav />
      </div>
      <div>
        <el-main style="height: 90vh">
          <div>
            <h2>List Page</h2>
            <button @click="dialogFormVisible = true"
                    style="float: right;cursor: pointer;background: #409eff;
                    color: white;border: none;width: 100px;height: 30px;
                    margin: auto;border-radius: 5px">New Page</button>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="title" label="title" width="360" />
            <el-table-column prop="url" label="url" width="480"/>
            <el-table-column fixed="right" label="action" width="240">
              <template #default="scope">
                <el-button
                    type="primary"
                    size="small"
                >
                  Edit
                </el-button>
                <el-button
                    type="secondary"
                    size="small"
                >
                  Detail
                </el-button>
                <el-button
                    type="danger"
                    size="small"
                    @click.prevent="deleteRow(scope.$index)"
                >
                  Remove
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination style="margin-top: 10px" background layout="prev, pager, next" :total="1" />
        </el-main>
      </div>
    </el-container>
    <el-dialog v-model="dialogFormVisible" title="New Page">
      <el-form :model="form">
        <el-form-item label="title" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off" />
        </el-form-item>
        <el-form-item label="link url" :label-width="formLabelWidth">
          <el-input v-model="form.url" autocomplete="off" />
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="addPage"
        >Add</el-button
        >
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import Nav from '@/components/admin/nav/index'
import Header from '@/components/admin/header/index'
import { ref } from 'vue'
const formLabelWidth = '140px'
const tableData = ref([
  {
    id: '1',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '2',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '3',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '4',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '5',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '6',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: '7',
    title: 'Tom',
    url: 'No. 189, Grove St, Los Angeles',
  },
])
const form = ref({})
const dialogFormVisible = ref(false)
const deleteRow = (index: number) => {
  tableData.value.splice(index, 1)
}
const addPage = () => {
  form.value.id = tableData.value.length + 1;
  tableData.value.push(form.value)
  dialogFormVisible.value = false
  form.value = {}
}
</script>

<style lang="scss" scoped>
.admin {
  height: 100vh;
}
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>