import java.util.*;
class Main{
    public static void main(String[] args)
    {
        Scanner s = new Scanner(System.in);
        int test = s.nextInt();
        for(int k=0;k<test;k++)
        {
            int size = s.nextInt();
            int[] arr = new int[size];
            Stack<Integer> st = new Stack<>();
            int[] ans = new int[size];
            for(int j=0;j<size;j++)
            {
                arr[j] = s.nextInt();
            }
            for(int i=arr.length-1;i>=0;i--)
            {
                while(!st.isEmpty() && arr[i] >= st.peek())
                {
                    st.pop();
                }
                ans[i] = (st.isEmpty())?-1:st.peek();
                st.add(arr[i]);
            }
            for(Integer i:ans)
            {
                System.out.print(i+" ");
            }
            System.out.println();
        }
    }
}