import mongoose from "mongoose";
import User from "./User";

const creditTransactionSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        index : true,
    },

    // transaction details
    type : {
        type : String,
        enum : ['earned' , 'used','refunded' , 'bonus' ,'purchased', 'expired'],
        required : true
    },
    amount : {
        type : Number,
        required : true,
    },

    // Usage context
    toolUsed : {
        type : String,
        enum : ['code_gen' , 'image_gen' , 'copywriter' , 'content_optimizer' ]
    },
    description : {
        type : String,
        required : true,
    },
    orderId : {type : String},
    sessionId : {type : String},
    subscriptionPlanId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'SubscriptionPlan'
    },

    // balance tracking
    balanceBefore : {
        type : Number,
        required : true,
        min : 0
    },
    balanceAfter : {
        type : Number,
        required: true,
        min : 0
    },
    
    // metadata
    ipAddress : {type : String},
    userAgent : {type : String},

    // timestamps
    createdAt : {type : Date , default : Date.now}
});

// indexes
creditTransactionSchema.index({userId : 1 , createdAt : -1});
creditTransactionSchema.index({type : 1 , createdAt : -1});
creditTransactionSchema.index({orderId : 1});


export default mongoose.models.CreditTransaction || mongoose.model('CreditTransaction' , creditTransactionSchema);
