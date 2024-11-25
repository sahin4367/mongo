import User from "../models/userModel.js";

export const createUser = async (req,res) => {
    try {
        const user = await User(req.body );
        await user.save();
        res.status(201).json({message : `istifadeci ugurla yaradildi ` , user})
    } catch (error) {
        res.status(400).json({message : `istifadeci yaradilmadi xata` , error})
    }
};

export const getUsers = async (req,res) => {
    try { 
        const users = await User.find();
        console.log(users);
        
        res.status(201).json(users);
    } catch (error) { 
        console.log(error)
        res.status(500).json({message : `istifadecini alarken xeta` , error});
    }
};

export const updateUser = async (req,res) => {
    try { 
        const { id } = req.params;
        const user = await User.findByIdAndUpdate(id,req.body, {new :true })// id ,req.body,{new : true}
        if (!user) {
            return res.status(404).json({message : `istifadeci tapilmadi`})
        }

        res.status(201).json({message : `istifadeci yenilendi ` ,user});        
    } catch (error) {
        res.status(400).json({message : `istifsdeci yenilene bilmedi ` ,error})
    }
}

export const deleteUser = async (req,res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if(!user) {
            res.status(404).json({message : `istifadeci tapilmadi `});
        };
        res.status(201).json({message : `istifadeci ugutla silindi ` ,user});
    } catch (error) {
        res.status(400).json({message : `istifadei siline bilmedi` ,error});
    };
};      

// search  ??????????????????
