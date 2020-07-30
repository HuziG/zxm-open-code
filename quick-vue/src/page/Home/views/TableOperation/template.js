/*
 * @Author: zdj
 */
export const getTableTemplate = (getUrl, bothName, valueId, columnsInfo) => {
  const delName = "Del" + bothName;
  const addName = "Add" + bothName;
  const editName = "Edit" + bothName;

  return `
    <template>
      <div>
        <div class="table-tool-bar">
          <el-button
            icon="el-icon-refresh-left"
            circle
            @click="refreshTableData"
          ></el-button>
        </div>

        <TableData url="${getUrl}" ref="TableData">
          ${columnsInfo}
          <el-table-column width="200">
            <template slot="header" slot-scope="scope" style="float: left;">
              <el-button type="text" size="mini" @click="handleAdd">添加</el-button>
            </template>
            <template slot-scope="scope">
              <el-button type="text" size="mini" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="text" size="mini" style="color: #f56c6c; margin-left: 20px;" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </TableData>
    
        <el-dialog :visible.sync="dialogVisible" width="600px">
          <Form  v-if="dialogVisible" :cmpEdit="cmpEdit" :cmpSubmit="cmpSubmit" :initFormData="initFormData" />
        </el-dialog>
      </div>
    </template>
    
    <script lang="ts">
      import { Vue, Component } from "vue-property-decorator";
      import TableData from "@/components/TableData.vue";
      import Form from "./Form.vue";
      import { getEditedData } from "@/utils/utils";
      import { ${addName}, ${delName}, ${editName} } from '@/api/${bothName}Manage'

      @Component({
        components: {
          TableData,
          Form,
        },
      })
      export default class Index extends Vue {
        dialogVisible = false;
        initFormData = {};

        refreshTableData() {
          (this.$refs.TableData as any).getTableData();
        }

        async handleDelete(index: number, row: any) {
          await ${delName}({${valueId}: row.${valueId}});
          (this as any).$message.success("删除成功！");
          (this.$refs.TableData as any).tableData.splice(index, 1);
        }

        handleEdit(row: object) {
          this.initFormData = JSON.parse(JSON.stringify(row));
          this.dialogVisible = true;
        }

        handleAdd() {
          this.initFormData = {};
          this.dialogVisible = true;
        }

        async cmpEdit(formData: object) {
          const { data, msg } = await ${editName}(formData);
          (this.$refs.TableData as any).tableData = getEditedData(
            (this.$refs.TableData as any).tableData,
            '${valueId}',
            data
          );
          (this as any).$message.success(msg);
          this.dialogVisible = false;
        }

        async cmpSubmit(formData: object) {
          const { data, msg } = await ${addName}(formData);
          (this as any).$message.success(msg);
          (this.$refs.TableData as any).tableData.push(data);
          this.dialogVisible = false;
        }
      }
    </script>
    
    <style lang="scss" scoped>
    </style>
    `;
};
