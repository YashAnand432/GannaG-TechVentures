import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // Basic Authentication
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    trim: true
  },
  password: { 
    type: String, 
    required: true 
  },
  
  // Profile Information
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
   username: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true,
    lowercase: true,
    minlength: 6
  },
  phoneNumber: { 
    type: String, // ✅ CHANGED: to String for international formats
    trim: true,
    unique: true,
    sparse: true // Allows multiple users to have no phone number
  },
   dateOfBirth: { 
    type: Date 
  },
  country: { 
    type: String, 
    trim: true 
  },
  // Credit Management (CORE OF THE SYSTEM)
  availableCredits: { 
    type: Number, 
    default: 50,
    min: 0
  },
  totalCreditsEarned: { 
    type: Number, 
    default: 50,
    min: 0
  },
  totalCreditsUsed: { 
    type: Number, 
    default: 0,
    min: 0
  },
  
  // REMOVED: currentSubscription, subscriptionStatus, subscriptionStartDate, subscriptionEndDate
  // REMOVED: trialStartDate, trialEndDate
  
  // 2 Factor Authentication
  isTwoFactorEnabled: {
    type: Boolean,
    default: true,
    required: true
  },
  twoFactorCode: {
    type: String,
    default: null
  },
  twoFactorCodeExpires: {
    type: Date,
    default: null
  },

  // Razorpay Integration
  razorpayCustomerId: { type: String },
  
  // Email Verification
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: { type: String },
  emailVerificationExpires: { type: Date },
  
  // Password Reset
  passwordResetToken: { type: String },
  passwordResetExpires: { type: Date },
  
  // Account Status
  isActive: { type: Boolean, default: true },
  
  // OAuth Integration
  googleId: { type: String },
  facebookId: { type: String },
  
  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  lastLoginAt: { type: Date }
}, {
  timestamps: true
});

// Indexes for performance
userSchema.index({ email: 1 });
userSchema.index({ razorpayCustomerId: 1 });

export default mongoose.models.User || mongoose.model('User', userSchema);
