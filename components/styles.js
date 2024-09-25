import { StyleSheet ,Dimensions} from "react-native";
const windowWidth = Dimensions. get('window').width;
const styles=StyleSheet.create({
    app:{
      flex:1,
    },
    container: {
        flex: 1,
    },
  background:  {
    backgroundColor:'white',},
    body: {
        flex: 1,
        paddingHorizontal: 10,
    },
    section: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: 'white',
        width:'100%'
    },
    touchableOption: {
        paddingHorizontal: 14,
    },
    option: {
        fontSize: 13,
        color: '#000',
    },
    boldUnderline: {
        // fontWeight: 'bold',
        borderBottomWidth:1,
        paddingBottom:4
    },
    bold:{
        fontWeight:'bold',
        color:'black'
    },
    bannerContainer: {
        paddingHorizontal: 10,
    },
    bannerItem: {
        padding:15,
        paddingBottom:0,
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bannerImage: {
        // width: '100%',
        width:(windowWidth-35),
        height: 200,
        resizeMode: 'cover',
    },
    bannerText: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
    },
    main:{
        
        padding:15,
           },
    gridContainer: {
        paddingHorizontal: 10,
    },
    gridItem: {
        flex: 1,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
  
    },

    gridImage: {
        width:(windowWidth-40)/3,
        height: 150,
        
        borderRadius:10,
  
        
    },
    gridImage2: {
        width:(windowWidth-40)/3,
        height: 150,
     
      
        
    },
    gridImage3:{
        width:(windowWidth-30)/2,
        height: 250,
        resizeMode: 'cover',
    },
    gridText: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
    },
    heading:{
        paddingBottom:20,
      },
    head:{
     
        fontSize:20,
        color:'black'
       },
       
       title:{fontSize:20,
        color:'black',
         textAlign:'center'
    },
       first: {
        height: 300,
        width: (windowWidth - 20) / 2.3,
        resizeMode: 'cover',
    },
    second:
    {
        resizeMode: 'cover', height: 210,
        width: (windowWidth - 20) / 2.3,
    },
    tag: {
        paddingLeft: 60,
        fontSize: 25,
     
    },
    imge: {
        width: 100,
        height: 20,
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    cart: {
       
    },
    img: {
        width: 25,
        height: 25,
    },
    searchContainer: {
        backgroundColor: '#f8f8f8',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        paddingBottom: 40,
        paddingLeft: 10,
        paddingTop: 15,
        paddingRight: 10,
    },
    inputContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bdbcbb',
        paddingHorizontal: 10,
        borderWidth: 2,
    },
    inputbox: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 5,
       height:35
    },
    searchIcon: {
        width: 15,
        height: 15,
        marginRight: 10,
    },
    footerContainer:{paddingTop:30,padding:20, height:100,flexDirection:'row',justifyContent:'space-between'},
    mainBody:{
        alignItems:'center'
    },
    footertext:{paddingTop:10},
    footerImage:{
        width:25,height:25
    },
  })
  export default styles;