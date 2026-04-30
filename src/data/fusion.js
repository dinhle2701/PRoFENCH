const base = "/PRoFENCH"

export const fusion = [
    {
        id: 1,
        name: "1. Element-Wise Fusion",
        architecture: `${base}/image/architect/Element-wise.png`,
        details: "MAE  : 0.0561 \n MSE  : 0.0230 \n RMSE : 0.1140 \n MAPE : 1.7371% \nR²   : 0.9976",
        parameters: "393, 825",
    },
    {
        id: 2,
        name: "2. GenNN Fusion",
        architecture: `${base}/image/architect/GenNN.png`,
        details: "MAE  : 0.0617\n MSE  : 0.0215\n RMSE : 0.1467\n MAPE : 3.3590%\n R²   : 0.9959",
        parameters: "491,281",
    },
    {
        id: 3,
        name: "3. Early Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.0680 \n MSE  : 0.0228 \n RMSE : 0.1512 \n MAPE : 2.4790% \n R²   : 0.9957",
        parameters: "636,101",
    },
    {
        id: 4,
        name: "4. Attention-Based Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.0750\n MSE  : 0.0185\n RMSE : 0.1359\n MAPE : 2.7782%\n R²   : 0.9965",
        parameters: "1,743,777",
    },
    {
        id: 5,
        name: "5. Constraint-Based Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.3445\n MSE  : 0.1759\n RMSE : 0.4195\n MAPE : 8.9592%\n R²   : 0.9668",
        parameters: "628,625",
    },
    {
        id: 6,
        name: "6. GNN Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.1878\n MSE  : 0.0666\n RMSE : 0.2581\n MAPE : 7.4667%\n R²   : 0.9874",
        parameters: "217,826",
    },
    {
        id: 7,
        name: "7. Concatenation Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.2873\nMSE  : 0.1324\nRMSE : 0.3639\nMAPE : 10.8166%\nR²   : 0.9750",
        parameters: "655,361",
    },
    {
        id: 8,
        name: "8. Decision-Level Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.1571\n MSE  : 0.0400\n RMSE : 0.2000\n   MAPE : 5.9081%\n R²   : 0.9925",
        parameters: "644,996",
    },
    {
        id: 9,
        name: "9. En-De Fusion",
        architecture: `${base}/image/architect/Early.png`,
        details: "MAE  : 0.1303\nMSE  : 0.0430\nRMSE : 0.2073\nMAPE : 5.4885%\nR²   : 0.9919",
        parameters: "1,647,361",
    },
    // {
    //     id: 10,
    //     name: "Model (WiVi32-Fusion)",
    //     parameters: "393,825",
    // }
]