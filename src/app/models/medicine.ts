export interface IMedicine{
    medicineId: number,
    medicineName: string ,
    medicinePrice: number,
    medicineImage: string,
    seller: string,
    medicineDescription: string,
    category ?: number,
    categoryId: number
}