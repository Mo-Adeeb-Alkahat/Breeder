import "react-native-url-polyfill/auto";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pfplqttivluoqomtcybr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcGxxdHRpdmx1b3FvbXRjeWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2ODkyODUsImV4cCI6MjA0MjI2NTI4NX0.SkPnN8x8ISzDe5KLrKoOA8HXg3R0jiscb4TLwBe3LSM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
