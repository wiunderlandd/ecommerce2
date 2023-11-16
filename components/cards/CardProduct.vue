<script lang="ts" setup>
import { useCategoryStore } from '~/stores/category';
import { useStorageStore } from "~/stores/storage";
import { useProductsStore } from '~/stores/products';
import type { FormField } from '~/types/products';

const categoryStore = useCategoryStore();
const storageStore = useStorageStore();
const productStore = useProductsStore();

const isSuccess = ref(false);
const isShowAlert = ref(false);
const message = ref("");
const router = useRouter();
const isLoading = ref(false);

const { categories } = storeToRefs(categoryStore);
categoryStore.getAllCategory();

const formCreateProduct = [
  { name: "name", label: "Name", type: "text", value: "", placeholder: "Men's Streetwear", required: true },
  { name: "description", label: "Description", type: "text", value: "", placeholder: "This shirt features a vibrant and eye-catching color and a solid pattern that will give you a happy feeling...", required: true },
  { name: "price", label: "Price", type: "number", value: "", placeholder: "$30", required: true },
  { name: "image", label: "Image", type: "file", value: {}, placeholder: "", required: true },
  { name: "category", label: "Category", type: "select", value: "", placeholder: "", required: true },
];

const createProduct = async () => {
  isLoading.value = true;
  let file = formCreateProduct.find((item) => item.type === "file");
  file = await uploadFile(file?.value);
  const result: { [key: string]: any } = {};
  formCreateProduct.forEach((item: FormField) => {
    if(item.name){
      result[item.name] = item.value;
    }
  })
  result.image = file;
  await productStore.createProduct(result);
  if(!productStore.status){
    isSuccess.value = productStore.status;
    message.value = productStore.message;
    isShowAlert.value = true;
    isLoading.value = false;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }else{
    isSuccess.value = productStore.status;
    message.value = productStore.message;
    isShowAlert.value = true;
    isLoading.value = false;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      router.push({ path: "/product" });
    }, 1000);
  }
}

const uploadFile = async (formFile: any) => {
  const file = formFile?.target?.files[0];
  const payload = new FormData();
  payload.append("file", file);
  const pathname = `${Date.now().toString()}.${file.type.split("/")[1]}`;
  await storageStore.uploadFile(pathname, payload);
  if(storageStore.status){
    return storageStore.storage.Key;
  }
}
</script>

<template>
<section class="bg-white shadow-xl rounded-xl overflow-hidden">
<div :class="`w-full h-[200px] p-5 bg-gray-300`">
<img :src="baseStorageUrl + props.product.image" class="w-full h-full
object-contain"/>
</div>
<div class="px-5 pb-5 pt-9 relative">

<NuxtLink :to="`/product/${props.product.id}`" ><h3 class="text-lg font-
bold mb-4 text-limit limit-2">{{ props.product.name }}</h3></NuxtLink>

<div class="flex justify-between items-center">
<span class="text-sm font-normal">{{ props.product.category }}</span>
<span class="text-sm font-normal">${{ props.product.price }}</span>
</div>
<div :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px]
${props.product.isCart ? 'bg-blue-600 text-white' : 'bg-white'} shadow-xl
rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white
transition duration-300`">
<i class="ri-shopping-cart-2-line"></i>
</div>
</div>
</section>
</template>