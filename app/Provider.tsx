'use client'
import Loader from '@/components/Loader'
import { getClerkUsers } from '@/lib/actions/user.actions'
import { ClientSideSuspense, LiveblocksProvider } from '@liveblocks/react'
import { ReactNode } from 'react'

const Provider = ({children} : {children : ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth"
        resolveUsers={async({userIds}) =>{
            const users = await getClerkUsers({userIds});
            return users;
        }
    
    }
    >
      
        <ClientSideSuspense fallback={<Loader/>}>
          {children}
        </ClientSideSuspense>
  
    </LiveblocksProvider>
  )
}

// publicApiKey={"pk_dev_GNiLA-Vk_hIzYvWkGYik_SX4PKH0WXcN5DykqirsbBK6gERTQ0pc1EpCNMlwwT3-"}
export default Provider