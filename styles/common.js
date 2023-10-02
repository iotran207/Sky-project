<TouchableOpacity style={styles.ButtonSend} onPress={()=>{console.log(message)}} >
{showButton && (
<Icon name='send' color='#006fd5' style={styles.IconSend}/>
)}
</TouchableOpacity>