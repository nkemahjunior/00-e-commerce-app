
import PAGE_SIZE from "@/ui/PAGE_SIZE";

export  async function filters(query,curPage,sortBy,startPriceRange,priceRange1,priceRange2){

  

    //Pagination
    if(curPage && sortBy === false || sortBy === "nosort" && priceRange1 ===  false && 
        priceRange2 === false && startPriceRange === false){

        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;
        
        query.order('created_at',{ascending:false}).range(0,to);
    }


    //pagination with results sorted from highest price downward
    if(curPage && sortBy === "highest"  ){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.order('price',{ascending:false}).range(0,to)
    }



    //pagination with results sorted from lowest price
    if(curPage && sortBy === "lowest"){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.order('price').range(0,to)
    }

    
    //pagination and results starting from a particular price
    if(curPage && startPriceRange){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.gte('price',startPriceRange).range(0,to).order('created_at',{ascending:false});
    }

    //resetting sort order
    if(curPage && startPriceRange && sortBy === "nosort"){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.order('created_at',{ascending:false}).range(0,to);
    }


    //pagination and results between a particular price range
    if(curPage && priceRange1 && priceRange2){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.gte('price',priceRange1).lte('price',priceRange2).order('created_at',{ascending:false}).range(0,to)
    }

    //resetting sort
    if(curPage && priceRange1 && priceRange2 && sortBy === "nosort"){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

         query.order('created_at',{ascending:false}).range(0,to);
    }

    
    
    //pagination with results starting from a particular price and then the results are ordered from the highest price going down
    if(curPage && sortBy === "highest" && startPriceRange){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.gte('price',startPriceRange).order('price',{ascending:false}).range(0,to)
    }


    //pagination with results within a particular price range and the results sorted starting from the highest price
    if(curPage && sortBy === "highest" && priceRange1 && priceRange2 ){
        const from = (curPage - 1) * PAGE_SIZE;
        const to = from + PAGE_SIZE - 1;

        query.gte('price',priceRange1).lte('price',priceRange2).order('price',{ascending:false}).range(0,to)
    }


        //pagination with results starting from a particular price and then the results are ordered from the lowest price going down
        if(curPage && sortBy === "lowest" && startPriceRange){
            const from = (curPage - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE - 1;
    
            query.gte('price',startPriceRange).order('price').range(0,to)
        }
    
    
        //pagination with results within a particular price range and the results sorted starting from the lowest price
        if(curPage && sortBy === "lowest" && priceRange1 && priceRange2 ){
            const from = (curPage - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE - 1;
    
            query.gte('price',priceRange1).lte('price',priceRange2).order('price').range(0,to)
        }
    
    


    
    const { data, error , count} = await query;

    

    return {data,error,count}
}